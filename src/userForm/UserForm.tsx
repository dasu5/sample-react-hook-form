import { Button, Grid2, TextField } from "@mui/material";
import { IUserForm } from "../interfaces/UserFormInterface";
import { Controller, useForm } from "react-hook-form";
import { userInitialValues } from "../data/UserInitialValues";
import { UserFieldValidations } from "../validations/UserFieldValidations";

const UserForm = () => {
  const methods = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: userInitialValues,
  });

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = methods;

  const onSubmit = (values: IUserForm) => {
    console.log(values);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid2
        flexDirection="column"
        container
        spacing={4}
        alignItems="center"
        justifyContent="center"
      >
        <Grid2 component="div" display="flex" flexDirection="column">
          <Controller
            name="firstName"
            control={control}
            rules={UserFieldValidations.firstName}
            render={({ field }) => (
              <TextField
                label="First Name"
                id="firstName"
                variant="outlined"
                type="text"
                error={errors.firstName && true}
                {...field}
              />
            )}
          />
          <span style={{ color: "red" }}>
            {errors.firstName && errors.firstName.message}
          </span>
        </Grid2>
        <Grid2 component="div" display="flex" flexDirection="column">
          <Controller
            name="lastName"
            control={control}
            rules={UserFieldValidations.lastName}
            render={({ field }) => (
              <TextField
                label="Last Name"
                id="lastName"
                variant="outlined"
                type="text"
                error={errors.lastName && true}
                {...field}
              />
            )}
          />
          <span style={{ color: "red" }}>
            {errors.lastName && errors.lastName.message}
          </span>
        </Grid2>
        <Grid2 component="div" display="flex" flexDirection="column">
          <Controller
            name="email"
            control={control}
            rules={UserFieldValidations.email}
            render={({ field }) => (
              <TextField
                label="Email"
                id="email"
                variant="outlined"
                type="email"
                error={errors.email && true}
                {...field}
              />
            )}
          />
          <span style={{ color: "red" }}>
            {errors.email && errors.email.message}
          </span>
        </Grid2>
        <Grid2 component="div" display="flex" flexDirection="column">
          <Controller
            name="address"
            control={control}
            rules={UserFieldValidations.address}
            render={({ field }) => (
              <TextField
                label="Address"
                id="address"
                variant="outlined"
                type="text"
                error={errors.email && true}
                {...field}
              />
            )}
          />
          <span style={{ color: "red" }}>
            {errors.address && errors.address.message}
          </span>
        </Grid2>
        <Grid2 component="div" display="flex" flexDirection="column">
          <Controller
            name="age"
            control={control}
            rules={UserFieldValidations.age}
            render={({ field }) => (
              <TextField
                label="Age"
                id="age"
                variant="outlined"
                type="number"
                error={errors.age && true}
                {...field}
              />
            )}
          />
          <span style={{ color: "red" }}>
            {errors.age && errors.age.message}
          </span>
        </Grid2>
        <Grid2 component="div">
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </Grid2>
      </Grid2>
    </form>
  );
};
export default UserForm;
