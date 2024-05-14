interface ValidateSchema {
  [key: string]: {
    length: {
      min: number;
      max: number;
      message: string;
    };
    presence: {
      allowEmpty: boolean;
      message: string;
    };
    properties: {
      type: string;
      message: string;
    };
  };
}

export const useValidate = () => {
  const emailRegex = /^\S+@\S+\.\S+$/;

  const emailValidation = (value: string) => emailRegex.test(value);

  const checkValidate = ({
    data,
    validateSchema
  }: {
    data: any;
    validateSchema: ValidateSchema;
  }) => {
    const validateResult: any = {};

    if (data) {
      for (const [key, value] of Object.entries(data)) {
        if (
          !(value as any).name &&
          Object.keys(validateSchema).includes(key) &&
          (validateSchema[key].length.min > (value as any).length ||
            validateSchema[key].length.max < (value as any).length)
        ) {
          validateResult[key] = validateSchema[key].length.message;
        }
        if (
          Object.keys(validateSchema).includes(key) &&
          !validateSchema[key].presence.allowEmpty &&
          ((value as any) === "" || (value as any).name === "")
        ) {
          validateResult[key] = validateSchema[key].presence.message;
        }
        if (
          Object.keys(validateSchema).includes(key) &&
          validateSchema[key].properties.type !== "string"
        ) {
          if (
            validateSchema[key].properties.type === "email" &&
            !emailValidation(value as any) &&
            !((value as any) === "" || (value as any).name === "")
          ) {
            validateResult[key] = validateSchema[key].properties.message;
          } else if (
            validateSchema[key].properties.type === "number" &&
            isNaN(value as any)
          ) {
            validateResult[key] = validateSchema[key].properties.message;
          }
        }
      }
    }
    return validateResult;
  };

  return { checkValidate };
};
