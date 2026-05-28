/** Shared horizontal layout — same max-width & padding on every breakpoint */
export function PageContainer({
  children,
  className = "",
  as: Tag = "div",
}) {
  return (
    <Tag
      className={`w-full max-w-[90rem] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 ${className}`}
    >
      {children}
    </Tag>
  );
}
