import Card from '@mui/material/Card'

// component to wrap around a card
// for similar styling
export default function JCard(props) {
    return (
        <Card
            elevation={4}
            sx={{
                borderRadius:'15px',
                padding:'10px 20px',
                mb:'35px',
            }}
        >
            {props.children}
        </Card>
    )
}
