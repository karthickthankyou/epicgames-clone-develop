import { useEffect, useState } from 'react'

export interface IColorsProps {}

const ColorBox = ({
  color,
  colorClasses,
}: {
  color: string
  colorClasses: string[]
}) => {
  const [selected, setSelected] = useState('')

  useEffect(() => {
    const timerId = setTimeout(() => setSelected(''), 3000)
    return () => {
      clearTimeout(timerId)
    }
  }, [selected])

  const setSelectedState = ({
    colorType,
    shade,
    type,
  }: {
    colorType: string
    shade: string
    type: string
  }) => {
    navigator.clipboard.writeText(`text-${colorType}-${shade}`)
    setSelected(`${type}-${colorType}-${shade}`)
  }
  return (
    <div className='shadow-xl'>
      <div className='flex justify-between'>
        <h2 className='mb-2 text-xl'>{color}</h2>
        {selected && <p className='text-gray-400'>{`"${selected}"`} copied.</p>}
      </div>
      {colorClasses.map((colorClass) => {
        const shade = colorClass.split('-')[2]
        const colorType = colorClass.split('-')[1]
        return (
          <div className={`w-full shadow-lg text-white flex ${colorClass}`}>
            <div
              className={`flex items-center justify-center w-16 h-16 bg-${colorType}-900`}
            >
              {colorClass.split('-')[2]}
            </div>

            <div className='p-3 ml-auto'>
              <button
                type='button'
                className='px-1 font-serif bg-black rounded bg-opacity-30 hover:bg-opacity-50'
                onClick={() =>
                  setSelectedState({ colorType, shade, type: 'text' })
                }
              >
                T
              </button>
              <button
                type='button'
                className='px-1 ml-2 font-mono bg-black rounded bg-opacity-30 hover:bg-opacity-50'
                onClick={() =>
                  setSelectedState({ colorType, shade, type: 'bg' })
                }
              >
                bg
              </button>
            </div>
          </div>
        )
      })}
    </div>
  )
}

const Colors = () => (
  <div className='container mx-auto'>
    <h1 className='text-4xl'>Colors</h1>
    <p className='max-w-sm mt-2 mb-8 text-sm '>
      These are the colors we use in this project. The ample variety in each
      color allows us to create smooth experience for users eyes.
      <br />
      Click on <span className='font-serif'>T</span> or{' '}
      <span className='font-mono'>bg</span> to copy the corresponding classes.
    </p>

    <div className='grid grid-cols-1 gap-1 sm:gap-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6'>
      <ColorBox
        color='Gray'
        colorClasses={[
          'bg-gray-50',
          'bg-gray-100',
          'bg-gray-200',
          'bg-gray-300',
          'bg-gray-400',
          'bg-gray-500',
          'bg-gray-600',
          'bg-gray-700',
          'bg-gray-800',
          'bg-gray-900',
        ]}
      />
      <ColorBox
        color='Primary'
        colorClasses={[
          'bg-primary-50',
          'bg-primary-100',
          'bg-primary-200',
          'bg-primary-300',
          'bg-primary-400',
          'bg-primary-500',
          'bg-primary-600',
          'bg-primary-600',
          'bg-primary-800',
          'bg-primary-900',
        ]}
      />

      <ColorBox
        color='Blue'
        colorClasses={[
          'bg-blue-50',
          'bg-blue-100',
          'bg-blue-200',
          'bg-blue-300',
          'bg-blue-400',
          'bg-blue-500',
          'bg-blue-600',
          'bg-blue-700',
          'bg-blue-800',
          'bg-blue-900',
        ]}
      />

      <ColorBox
        color='Red'
        colorClasses={[
          'bg-red-50',
          'bg-red-100',
          'bg-red-200',
          'bg-red-300',
          'bg-red-400',
          'bg-red-500',
          'bg-red-600',
          'bg-red-700',
          'bg-red-800',
          'bg-red-900',
        ]}
      />
      <ColorBox
        color='Green'
        colorClasses={[
          'bg-green-50',
          'bg-green-100',
          'bg-green-200',
          'bg-green-300',
          'bg-green-400',
          'bg-green-500',
          'bg-green-600',
          'bg-green-700',
          'bg-green-800',
          'bg-green-900',
        ]}
      />
      <ColorBox
        color='Yellow'
        colorClasses={[
          'bg-yellow-50',
          'bg-yellow-100',
          'bg-yellow-200',
          'bg-yellow-300',
          'bg-yellow-400',
          'bg-yellow-500',
          'bg-yellow-600',
          'bg-yellow-700',
          'bg-yellow-800',
          'bg-yellow-900',
        ]}
      />
    </div>
  </div>
)

export default Colors
