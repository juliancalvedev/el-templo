import React from 'react'
import Text from '../Text/Text'
import useStyles from './useStyles'
import './Tag.scss'

const Tag = ({ text, onClick }) => {
    const styles = useStyles()
    return (
        <div
            className={styles.tagContainer}
            onClick={onClick}
        >
            <Text text={text} color='2' />
        </div>
    )
}

export default Tag