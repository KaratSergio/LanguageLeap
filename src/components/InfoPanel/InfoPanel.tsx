const InfoPanel = () => {
  return (
    <section className="info-panel flex flex-col md:flex-row justify-center w-full mt-6 mx-auto max-w-1312 gap-[100px] rounded-30 custom-gap border-dashed border-2 border-borderGrey py-[35px]">
      <article className="flex w-[237px] justify-center items-center">
        <p className="font-semibold text-[28px] info-width info-position text-pad">32,000 +</p>
        <p className="ml-4 text-sm w-24 info-width text-mob info-accent text-alfaGrey">Experienced tutors</p>
      </article>
      <article className="flex w-[242px] justify-center items-center">
        <p className="font-semibold text-[28px] info-width info-position text-pad">300,000 +</p>
        <p className="ml-4 text-sm w-24 info-width text-mob info-accent text-alfaGrey">5-star tutor reviews</p>
      </article>
      <article className="flex w-[159px] justify-center items-center">
        <p className="font-semibold text-[28px] info-width info-position text-pad">120 +</p>
        <p className="ml-4 text-sm w-16 info-width text-mob info-accent text-alfaGrey">Subjects taught</p>
      </article>
      <article className="flex w-[159px] justify-center items-center">
        <p className="font-semibold text-[28px] info-width info-position text-pad">200 +</p>
        <p className="ml-4 text-sm w-16 info-width text-mob info-accent text-alfaGrey">Tutor nationalities</p>
      </article>
    </section>
  );
};

export default InfoPanel;
