export interface ISpecificationsProps {}

const spec = {
  minimum: [
    { key: 'Windows OS', value: 'Windows 7 SP1+ (64bit)' },
    {
      key: 'Processor',
      value: 'Intel I3 4160 processor or equivalent Windows',
    },

    { key: 'RAM', value: 'Windows Memory 8 GB' },
    { key: 'Windows Storage', value: '20 GB available space' },
    { key: 'Graphics', value: 'NVIDIA GeForce GT 630 or equivalent Windows' },
  ],
  recommended: [
    { key: 'Windows OS', value: 'Windows 10 (64bit) Windows' },
    {
      key: 'Processor',
      value: 'Intel i7 4770 processor or equivalent Windows Memory 8 GB',
    },

    { key: 'RAM', value: 'Windows Memory 8 GB' },

    { key: 'Windows Storage', value: '20 GB available space' },

    {
      key: 'Graphics',
      value:
        'NVIDIA GeForce GTX 660 / Radeon HD 7850 or better Windows Other DX10 with Shader 4.0 support required',
    },
  ],
}

const Specifications = () => (
  <div className='grid grid-cols-2 gap-2 py-6'>
    <div>
      {spec.minimum.map((item) => (
        <div key={item.key} className='my-4'>
          <div className='text-gray-400'>{item.key}</div>
          <div className='mt-1 text-gray-100'>{item.value}</div>
        </div>
      ))}
    </div>
    <div>
      {spec.recommended.map((item) => (
        <div className='my-4' key={item.key}>
          <div className='text-gray-400'>{item.key}</div>
          <div className='mb-1 text-gray-100'>{item.value}</div>
        </div>
      ))}
    </div>
  </div>
)

export default Specifications
