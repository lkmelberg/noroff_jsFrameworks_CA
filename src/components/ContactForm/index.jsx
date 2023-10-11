import React from "react";

import { useForm } from "react-hook-form";
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
} from "@chakra-ui/react";
import { Textarea } from "@chakra-ui/react";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    fullName: yup

      .string()
      .min(3, "Your name should be at least 3 characters.")
      .max(100, "Your first name cannot be longer than 100 characters.")
      .required("Please enter your first name"),

    email: yup.string().email().required(),
    subject: yup
      .string()
      .min(3, "Your subject should be at least 3 characters.")
      .max(100, "Your subject cannot be longer than 100 characters.")
      .required("Please enter subject"),
    body: yup
      .string()
      .min(3, "Your body should be at least 3 characters.")
      .max(1000, "Your body cannot be longer than 100 characters.")
      .required("Please enter message"),
  })
  .required();

export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmit(data) {
    console.log(data);
    reset();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormLabel color="teal" htmlFor="fullName">
        First name:
      </FormLabel>
      <Input placeholder="Your Full Name" {...register("fullName")} />
      <p>{errors.fullName?.message}</p>
      <FormLabel color="teal" htmlFor="email">
        Email:
      </FormLabel>
      <Input placeholder="Your Email" {...register("email")} />
      <p>{errors.email?.message}</p>
      <FormLabel color="teal" htmlFor="subject">
        Subject:
      </FormLabel>
      <Input placeholder="Your Subject" {...register("subject")} />
      <p>{errors.subject?.message}</p>
      <FormLabel color="teal" htmlFor="body">
        Message:
      </FormLabel>
      <Textarea
        name="body"
        placeholder="Your Message"
        rows={6}
        resize="none"
        {...register("body")}
      />
      <p>{errors.body?.message}</p>

      <Button mt={4} colorScheme="teal" type="submit">
        Submit
      </Button>
    </form>
  );
}
