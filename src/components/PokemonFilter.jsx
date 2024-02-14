import * as LR from "lucide-react"
import Button from './Button'
const PokemonFilter = () => {
    const filterStyle = "flex justify-between items-center shadow-md rounded-lg pl-2 gap-2 w-full bg-white"
    return (
        <>

            <div className='flex gap-4 w-full '>
                <div className={filterStyle}>
                    <div className='flex'>
                        <LR.ChevronDown />
                        <label htmlFor="">Type</label>
                    </div>
                    <Button>
                        <LR.ChevronDown />
                    </Button>
                </div>
                <div className={filterStyle}>
                    <div className='flex'>
                        <LR.ChevronDown />
                        <label htmlFor="">Ability</label>
                    </div>
                    <Button>
                        <LR.ChevronDown />
                    </Button>
                </div>
                <div className={filterStyle}>
                    <div className='flex'>
                        <LR.ChevronDown />
                        <label htmlFor="">Height</label>
                    </div>
                    <Button>
                        <LR.ChevronDown />
                    </Button>
                </div>
                <div className={filterStyle}>
                    <div className='flex'>
                        <LR.ChevronDown />
                        <label htmlFor="">Weight</label>
                    </div>
                    <Button>
                        <LR.ChevronDown />
                    </Button>
                </div>
                <div className='flex items-center shadow-md rounded-lg gap-2 bg-white'>
                    <Button>
                        <LR.RotateCcw />
                    </Button>
                </div>

            </div>
        </>
    )
}

export default PokemonFilter