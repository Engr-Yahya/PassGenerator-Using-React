import { useState } from "react"

function BgChanger() {

  const [color, setColor] = useState('gray');

  return (
    <div className="w-full h-screen duration-500"
      style={{ background: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            onClick={() => setColor('red')}
            className="outline-none px-4 py-1 text-white rounded-full shadow-lg"
            style={{ backgroundColor: 'red' }}>
            Red
          </button>
          <button
            onClick={() => setColor('green')}
            className="outline-none px-4 py-1 text-white rounded-full shadow-lg"
            style={{ backgroundColor: 'green' }}>
            Green
          </button>
          <button
            onClick={() => setColor('olive')}
            className="outline-none px-4 py-1 text-white rounded-full shadow-lg"
            style={{ backgroundColor: 'olive' }}>
            Olive
          </button>
          <button
            onClick={() => setColor('purple')}
            className="outline-none px-4 py-1 text-white rounded-full shadow-lg"
            style={{ backgroundColor: 'purple' }}>
            purple
          </button>
          <button
            onClick={() => setColor('blue')}
            className="outline-none px-4 py-1 text-white rounded-full shadow-lg"
            style={{ backgroundColor: 'blue' }}>
            Blue
          </button>
          <button
            onClick={() => setColor('pink')}
            className="outline-none px-4 py-1 text-white rounded-full shadow-lg"
            style={{ backgroundColor: 'pink' }}>
            Pink
          </button>
          <button
            onClick={() => setColor('black')}
            className="outline-none px-4 py-1 text-white rounded-full shadow-lg"
            style={{ backgroundColor: 'black' }}>
            Black
          </button>
          <button
            onClick={() => setColor('orange')}
            className="outline-none px-4 py-1 text-white rounded-full shadow-lg"
            style={{ backgroundColor: 'orange' }}>
            orange
          </button>
        </div>
      </div>
    </div>
  )
}

export default BgChanger