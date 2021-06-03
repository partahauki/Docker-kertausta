const Header = (props) => {
    return (
        <header className='header'>
            <h1>{props.title}</h1>
        </header>
    )
}

Header.defaultProps = {
    title: 'No title-prop submitted',
}

export default Header
