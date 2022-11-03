import PropTypes from 'prop-types';

const FirstApp = ({title, subtitle, name}) =>{

    return(

        <>
        <h1>{title}</h1>
        
        <p>{subtitle}</p>
        <p>{name}</p>
        </>
    )
}
export default FirstApp;

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string
}

FirstApp.defaultProps = {
    name: 'Matías Morales',
    subtitle: 'No hay subtítulo'
}