import React from 'react'

class Contador extends React.Component {

    static defaultProps = {
        tempo: 1000,
        numero: 0
    }

    constructor(props){
        super(props);
        
        this.state = {
            numero: props.numero
        }
    }

    componentDidMount(){
        this.Interval = setInterval(() => {
            this.setState({
                numero: this.state.numero + 1
            })
        }, this.props.tempo)
        
    }

    componentDidUpdate(oldProps, nextProps){
        console.log('ComponentDidUpdate')
        console.log(`Numero Anterior: ${oldProps.numero}`)
        console.log(`Numero Futuro: ${nextProps.numero}`)
    }

    componentWillUnmount(){
        clearInterval(this.Interval);
    }

    render(){
        const { numero } = this.state

        return(
            <p>{numero}</p>
        )
    }
}

export default Contador
