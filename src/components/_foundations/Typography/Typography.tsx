export interface ITypographyProps {}

const Typography = () => (
  <div>
    <div className='text-4xl'>Typography</div>
    <p className='mt-2 mb-8'>
      We use the typescale that tailwind provides us out of the box.
    </p>

    <div className='my-2 text-3xl'>Font size</div>
    <div className='text-9xl'>text-9xl</div>
    <div className='text-8xl'>text-8xl</div>
    <div className='text-7xl'>text-7xl</div>
    <div className='text-6xl'>text-6xl</div>
    <div className='text-5xl'>text-5xl</div>
    <div className='text-4xl'>text-4xl</div>
    <div className='text-3xl'>text-3xl</div>
    <div className='text-2xl'>text-2xl</div>
    <div className='text-xl'>text-xl</div>
    <div className='text-lg'>text-lg</div>
    <div className='text-base'>text-base</div>
    <div className='text-sm'>text-sm</div>
    <div className='text-xs'>text-xs</div>

    <div className='mt-8 mb-2 text-3xl'>Font weight</div>

    <div className='font-thin'>font-thin</div>
    <div className='font-extralight'>font-extralight</div>
    <div className='font-light'>font-light</div>
    <div className='font-normal'>font-normal</div>
    <div className='font-medium'>font-medium</div>
    <div className='font-semibold'>font-semibold</div>
    <div className='font-bold'>font-bold</div>
    <div className='font-extrabold'>font-extrabold</div>
    <div className='font-black'>font-black</div>

    <div className='mt-8 mb-2 text-3xl'>Letter spacing</div>

    <div className='tracking-tighter'>tracking-tighter</div>
    <div className='tracking-tight'>tracking-tight</div>
    <div className='tracking-normal'>tracking-normal</div>
    <div className='tracking-wide'>tracking-wide</div>
    <div className='tracking-wider'>tracking-wider</div>
    <div className='tracking-widest'>tracking-widest</div>

    <div className='mt-8 mb-2 text-3xl'>Line height</div>

    <div className='leading-3'>leading-3</div>
    <div className='leading-4'>leading-4</div>
    <div className='leading-5'>leading-5</div>
    <div className='leading-6'>leading-6</div>
    <div className='leading-7'>leading-7</div>
    <div className='leading-8'>leading-8</div>
    <div className='leading-9'>leading-9</div>
    <div className='leading-10'>leading-10</div>
    <div className='leading-none'>leading-none</div>
    <div className='leading-tight'>leading-tight</div>
    <div className='leading-snug'>leading-snug</div>
    <div className='leading-normal'>leading-normal</div>
    <div className='leading-relaxed'>leading-relaxed</div>
    <div className='leading-loose'>leading-loose</div>
  </div>
)

export default Typography
