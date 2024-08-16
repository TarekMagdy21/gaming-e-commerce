import React from "react";
type VerticalColumnElementsProps = {
  children: React.ReactNode[];
};

export const VerticalColumnElements = ({
  children,
}: VerticalColumnElementsProps) => {
  return <div>{children} </div>;
};
type VerticalColumnTextProps = {
  text: { text: string; url?: string }[];
};

export const VerticalColumnText = ({ text }: VerticalColumnTextProps) => {
  return (
    <div className="">
      <div className="grid">
        {text.map((item, index) => (
          <div
            key={index}
            className={`text-[#FAFAFA] ${
              index === 0 ? "text-2xl mb-6" : "text-base mb-4"
            }`}
          >
            {item.url ? (
              <a href={item.url} className="hover:underline">
                {item.text}
              </a>
            ) : (
              item.text
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export const VerticalColumnTextHome = ({ text }: VerticalColumnTextProps) => {
  return (
    <div className="">
      <div className="grid">
        {text.map((item, index) => (
          <div
            key={index}
            className={`text-base mb-4`}
          >
            {item.url ? (
              <a href={item.url} className="hover:underline">
                {item.text}
              </a>
            ) : (
              item.text
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
