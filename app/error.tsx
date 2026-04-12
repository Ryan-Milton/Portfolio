"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@nextui-org/react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    /* eslint-disable no-console */
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-8xl font-bold text-zinc-200 dark:text-zinc-800">
          :(
        </span>
      </motion.div>

      <motion.h2
        animate={{ opacity: 1, y: 0 }}
        className="mt-6 text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100"
        initial={{ opacity: 0, y: 20 }}
        transition={{ delay: 0.1, duration: 0.5 }}
      >
        Something went wrong
      </motion.h2>

      <motion.p
        animate={{ opacity: 1, y: 0 }}
        className="mt-3 max-w-md text-base text-zinc-600 dark:text-zinc-400"
        initial={{ opacity: 0, y: 20 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        An unexpected error occurred. You can try again or head back to the
        homepage.
      </motion.p>

      <motion.div
        animate={{ opacity: 1, y: 0 }}
        className="mt-8 flex gap-4"
        initial={{ opacity: 0, y: 20 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <Button color="primary" onPress={() => reset()}>
          Try again
        </Button>
        <Button as="a" href="/" variant="bordered">
          Go home
        </Button>
      </motion.div>
    </div>
  );
}
