import {
  Box,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object()
  .shape({
    firstName: yup.string().required(),
    lastName: yup.number().required(),
  })
  .required();

const initValues = {
  firstName: "",
  lastName: "",
};

const Form = () => {
  const { register, handleSubmit, formState: {errors, touchedFields} } = useForm<any>({
    mode: "onTouched",
    reValidateMode: "onSubmit",
    resolver: yupResolver(schema),
    defaultValues: initValues,
  });

  const onSubmit = (values: any) => {
    console.log("values", values);
  };

  const onError = (error: any) => {
    console.log("error", error);
  };
console.log("errors--", errors, "touchedFields--", touchedFields)
  return (
    <Box width={"50%"} border="1px solid white">
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <Box
          display={"flex"}
          width="full"
          justifyContent={"space-between"}
          gap="4"
        >
          <Box width={"full"}>
            <FormControl>
              <FormLabel>First Name</FormLabel>
              <Input id="firstName" type="text" {...register("firstName")} />
              {errors.firstName &&
                <FormHelperText color="red">{errors.firstName.message?.toString()}</FormHelperText>
              }
            </FormControl>
          </Box>
          <Box width={"full"}>
            <FormControl>
              <FormLabel>Last Name</FormLabel>
              <Input id="lastName" type="text" {...register("lastName")} />
            </FormControl>
          </Box>
        </Box>
        <Box display={"flex"} w={"full"} justifyContent={"center"}>
        <Button w={"200px"} type="submit" colorScheme='blue'>Submit</Button>          
        </Box>
      </form>
    </Box>
  );
};

export default Form;
