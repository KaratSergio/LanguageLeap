const InfoPanel = () => {
  return (
    <section
      className="flex justify-center w-full mt-6 mx-auto max-w-1312 gap-[100px]  rounded-30 border-dashed border-2 border-borderGrey py-[35px]"
      style={{ borderSpacing: '2.5rem' }}
    >
      <article className="flex w-[237px] justify-center items-center">
        <p className="font-semibold text-[28px]">32,000 +</p>
        <p className="ml-4 text-sm w-24 text-alfaGrey">Experienced tutors</p>
      </article>
      <article className="flex w-[242px] justify-center items-center">
        <p className="font-semibold text-[28px]">300,000 +</p>
        <p className="ml-4 text-sm w-24 text-alfaGrey">5-star tutor reviews</p>
      </article>
      <article className="flex w-[159px] justify-center items-center">
        <p className="font-semibold text-[28px]">120 +</p>
        <p className="ml-4 text-sm w-16 text-alfaGrey">Subjects taught</p>
      </article>
      <article className="flex w-[159px] justify-center items-center">
        <p className="font-semibold text-[28px]">200 +</p>
        <p className="ml-4 text-sm w-16 text-alfaGrey">Tutor nationalities</p>
      </article>
    </section>
  );
};

export default InfoPanel;
