import React, { useEffect } from 'react'
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import { makeStyles,withStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    toggle: {
        outlineColor: '#EFE436', 
        outlineWidth: '1px', 
        outlineStyle: 'solid',
        color : "black"
    },
  }));


const ToggleButtonContainer = ({data , getOptions , defaultValue , getOptionsType}) => {
    const classes = useStyles()
    const [groupValue, setGroupValue] = React.useState();

    const handleChange = (e, value) => {
        if(value){
            setGroupValue(value)
        }
    };

    useEffect(()=>{
        if(getOptionsType){
            getOptionsType(groupValue)
        }

    },[,groupValue,setGroupValue])

    useEffect(()=>{
        if(getOptions){
            getOptions(groupValue)
        }
    },[,groupValue, setGroupValue])


    return (
        <ToggleButtonGroup size="large" value={defaultValue} exclusive onChange={handleChange}>
            {            
                data.map((item)=>(
                    <ToggleButton value = {item.value}  aria-label="left aligned" className={classes.toggle}>
                        {item.label}
                    </ToggleButton>
                ))
            }
        </ToggleButtonGroup>
    )
}

export default ToggleButtonContainer
