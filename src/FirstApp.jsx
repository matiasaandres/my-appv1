import PropTypes from 'prop-types';

export const FirstApp = ({ title, subTitle, name }) => {

  // console.log(props);
  
  return (
    <>
      <h1 data-testid="test-title"> { title } </h1>
      {/* <code>{ JSON.stringify( newMessage ) }</code> */}
      <p>{ subTitle }</p>
      <p>{ subTitle }</p>
      <p>{ name }</p>
    </>
  )
}

export default FirstApp;

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
}

FirstApp.defaultProps = {
  name: 'Matias Morales',
  subTitle: 'No hay subtitulo',
  title: 'No hay titulo',
}