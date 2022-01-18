import { Flex, Text, Box, Avatar } from "@chakra-ui/react";

interface ProfileProps {
    showProfileData?: boolean;
}

export default function Profile({ showProfileData = true }: ProfileProps) {
    return (
        <Flex align="center">
            {showProfileData && (
                <Box
                    mr="4"
                    textAlign='right'
                >
                    <Text>Sr. Jorge de Souza</Text>
                    <Text
                        color="gray.300"
                        fontSize="Small">
                        jorgedesouzajacintto_jr@hotmail.com</Text>

                </Box>
            )}

            <Avatar size="md" name="Jorge de Souza" src="https://github.com/srsouzaj.png" />
        </Flex>
    )
}