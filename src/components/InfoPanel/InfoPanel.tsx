import { useTheme } from '@hooks/useTheme';

const InfoPanel = () => {
  const { bg: backgroundColor } = useTheme();

  return (
    <section className="info-panel border-custom flex flex-col md:flex-row justify-center w-full mt-6 mx-auto max-w-1312 gap-[100px] rounded-30 custom-gap py-[37px] relative">
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
        <rect
          x="0"
          y="0"
          width="100%"
          height="100%"
          fill="transparent"
          stroke={backgroundColor}
          strokeWidth="4"
          strokeDasharray="19 16"
          rx="30"
          ry="30"
          style={{ transition: 'stroke 0.3s' }}
        />
      </svg>
      <article className="flex w-[237px] justify-center items-center">
        <p className="font-medium text-[28px] info-width info-position text-pad">32,000 +</p>
        <p className="ml-4 text-sm w-24 info-width text-mob info-accent text-alfaGrey">Experienced tutors</p>
      </article>
      <article className="flex w-[242px] justify-center items-center">
        <p className="font-medium text-[28px] info-width info-position text-pad">300,000 +</p>
        <p className="ml-4 text-sm w-24 info-width text-mob info-accent text-alfaGrey">5-star tutor reviews</p>
      </article>
      <article className="flex w-[159px] justify-center items-center">
        <p className="font-medium text-[28px] info-width info-position text-pad">120 +</p>
        <p className="ml-4 text-sm w-16 info-width text-mob info-accent text-alfaGrey">Subjects taught</p>
      </article>
      <article className="flex w-[159px] justify-center items-center">
        <p className="font-medium text-[28px] info-width info-position text-pad">200 +</p>
        <p className="ml-4 text-sm w-16 info-width text-mob info-accent text-alfaGrey">Tutor nationalities</p>
      </article>
    </section>
  );
};

export default InfoPanel;
