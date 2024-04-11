import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

// import placeholder image for testing purposes
import placeholder from '../assets/pony.png';

function AnimalCard({id, name, image, description}) {
    return (
        <Card className='animal-card' style={{ backgroundColor: 'transparent'}}>
            <Card.Img className='card-image' variant="top" src={placeholder} style={{width: '100%', height: '50%'}} />
            <Card.Body>
                <Card.Title className='animal-name'>{name}</Card.Title>
                {/* if there is a description available */}
                {description && (
                    <Card.Text className='card-description'>
                        {description}
                    </Card.Text>
                )}
                <Button variant="primary">Learn More</Button>
            </Card.Body>
        </Card>
    );
}

export default AnimalCard;