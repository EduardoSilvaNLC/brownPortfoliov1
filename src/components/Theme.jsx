import { extendTheme } from "@chakra-ui/react";

const overrides = extendTheme({
  styles: {
    global: () => ({
      body: {
        bgGradient: "linear(to-r,rgba(25, 11, 19, 1), rgba(68, 53, 49, 1))",
        color: "#FBDFB3",
      },
    }),
  },
});

export default overrides;
