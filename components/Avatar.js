function Avatar({ url }) {
    return(
        <img 
            className="h-10 cursor-pointer duration-150 transform hover:scale-110"
            loading="lazy"
            src={url}
            alt="Profile picture"
        />
    )
}

export default Avatar;