import Card from '../UI/Card'

const Minister = ({ image, name, job, socials }) => {
    return (
        <Card className="minister">
            <div className="minister__img">
                <img src={image} alt={name} />
            </div>
            <h3>{name}</h3>
            <p>{job}</p>
            <div className="minister__socials">
                {
                    socials.map(({ icon, link }, index) => {
                        // eslint-disable-next-line react/jsx-no-target-blank
                        return <a key={index} href={link} target='_blank' rel='noreffer noopener'>{icon}</a>
                    })
                }
            </div>
        </Card>
    )
}

export default Minister