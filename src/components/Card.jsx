import React from 'react'

const Card = ({item,index}) => {
  return (
    <>
    <div key={index} className="w-[100%] pt-6">
          <div className="bg-violet2-300 pt-6 mt-2 rounded overflow-hidden shadow-lg px-4 min-w-full" >
            <img className="w-full" src={item.image} alt="character_img" />
            <div className="px-2 py-4">
              <div className="font-bold text-xl mb-2">{item.name}</div>
              <p className="text-slate-300 text-base ">{item.species}</p>
            </div>
          </div>
        </div>
    </>
  )
}

export default Card