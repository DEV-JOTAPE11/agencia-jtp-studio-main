import React from "react";
import { motion } from "framer-motion";

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: {
    text: string;
    image: string;
    name: string;
    role: string;
  }[];
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role }, i) => (
                <div className="glass-card p-8 rounded-3xl border border-primary/20 shadow-lg shadow-primary/10 max-w-xs w-full" key={i}>
                  <div className="text-sm text-muted-foreground">"{text}"</div>
                  <div className="flex items-center gap-3 mt-6">
                    <img
                      src={image}
                      alt={name}
                      width={80}
                      height={80}
                      loading="lazy"
                      decoding="async"
                      className="h-10 w-10 rounded-full object-cover border border-primary/20"
                    />
                    <div className="flex flex-col">
                      <div className="text-sm font-medium tracking-tight leading-5 text-foreground">{name}</div>
                      <div className="text-xs leading-5 text-muted-foreground tracking-tight">{role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};
