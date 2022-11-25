import { Container, Text, Title } from "./Home.styled";

const Home = () => {
    return (
        <Container>
            <Title>
                Welcome to PhoneBook App
                <span>&#9742;&#65039;</span>
            </Title>
            <Text>
                Please, register or login to collect your contacts easily
            </Text>
        </Container>
    )
};

export default Home;

