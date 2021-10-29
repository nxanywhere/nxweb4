import styles from '../styles/option-button.module.scss'
import { OptionButtonProps } from '../interfaces'
import { FC, useState, useEffect, useRef } from 'react'
import CheckIcon from '../images/check.svg'


const OptionButton = ({ label, options, value, selected }: OptionButtonProps) => {

    const ref = useRef<HTMLDivElement | null>(null)
    const [open, setOpen] = useState<boolean>(false)

    useEffect(() => {

        const handleClickOutside = (e: MouseEvent) => {
            if (ref.current && !ref.current?.contains(e.target as Node)) {
                setOpen(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [ref])

    const handleToggle = () => {
        setOpen(!open)
    }

    const handleOptonClick = (value: any) => {

        if (selected && typeof selected === 'function') {
            selected(value)
        }

        setOpen(false)
    }

    return (
        <div ref={ref} className={styles.wrap}>
            <button
                className={styles.btn}
                onClick={handleToggle}
                type="button"
            >
                {label}
            </button>
            {open && options &&
                <ul className={styles.option}>
                    {options.map((v, i) => (
                        <li
                            key={i}
                            onClick={() => handleOptonClick(v.value)}>
                            {value === v.value ? <CheckIcon /> : null} <span>{v.title}</span>
                        </li>
                    ))}
                </ul>
            }
        </div>
    )
}

export default OptionButton