import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

// import placeholder image for testing purposes
import placeholder from '../assets/pony.png';

function AnimalCard({id, name, image, description}) {
    return (
        <Card className='animal-card' style={{ backgroundColor: 'white'}}>
            <Card.Img className='card-image' variant="top" src={image} style={{width: '100%', height: '50%'}} />
            <Card.Body>
                <Card.Title className='animal-name'>{name}</Card.Title>
                {/* if there is a description available */}
                {description && (
                    <Card.Text className='card-description'>
                        {description}
                    </Card.Text>
                )}
                <Link to='https://www.patreon.com/lilysranchandrescue?utm_medium=unknown&utm_source=join_link&utm_campaign=creatorshare_creator&utm_content=copyLink' target='_blank' className='card-link'>
                    <Button variant="primary" className='card-button'>Learn More</Button>
                </Link>
            </Card.Body>
        </Card>
    );
}

export default AnimalCard;