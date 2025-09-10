export const SectionHeader = ({
    // Define Props
    title,
    eyebrow,
}: {
    // Define Props Type
    title: string;
    eyebrow: string;
}) => {
  return (
    // React Fragment for eyebrow gradient and title
    <>
        <p className="uppercase sont-semibold tracking-widest bg-gradient-to-r from-color-primary to-color-secondary text-center"> {eyebrow} </p>
        <h2 className="font-serif text-3xl text-center mt-10"> {title} </h2>
    </>
  );
};
                