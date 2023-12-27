import { Html, Body, Container, Tailwind, Text, Button, Heading, Head } from "@react-email/components"

const Email = () => {
    return (
        <Html>
            <Head />
            <Tailwind>
                <Body className="bg-white my-12 mx-auto font-sans">
                    <Container className="p-8 rounded-lg shadow-lg">
                        <Heading className="text-xl pt-4">Hello World</Heading>
                        <Text className="text-lg font-medium text-grey-700">
                            Thanks for using Tailwind CSS! Head over to tailwindcss.com to get started.
                        </Text>
                        <Button className="mt-8 bg-blue-500 text-white font-bold py-2 px-4 rounded">
                            Visit Tailwind CSS
                        </Button>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    )
}

export default Email