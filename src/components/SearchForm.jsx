import { Input, FormControl, FormLabel, FormHelperText, FormErrorMessage } from "@chakra-ui/react";
import { useState } from "react";

const SearchForm = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    const newErrors = {};

    if (!email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is invalid.";
    }

    if (!username) {
      newErrors.username = "Username is required.";
    }

    if (!phone) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^\d{10}$/.test(phone)) {
      newErrors.phone = "Phone number is invalid.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log({ email, username, phone });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl isInvalid={errors.email}>
        <FormLabel>Email address</FormLabel>
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <FormErrorMessage>{errors.email}</FormErrorMessage>}
        <FormHelperText>We'll never share your email.</FormHelperText>
      </FormControl>

      <FormControl isInvalid={errors.username}>
        <FormLabel>Username</FormLabel>
        <Input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        {errors.username && <FormErrorMessage>{errors.username}</FormErrorMessage>}
      </FormControl>

      <FormControl isInvalid={errors.phone}>
        <FormLabel>Phone number</FormLabel>
        <Input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        {errors.phone && <FormErrorMessage>{errors.phone}</FormErrorMessage>}
      </FormControl>

      <button type="submit">Submit</button>
    </form>
  );
};

export default SearchForm;
