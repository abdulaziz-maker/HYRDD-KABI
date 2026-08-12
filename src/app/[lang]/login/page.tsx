import {
    Anchor,
    Box,
    Button,
    Checkbox,
    Flex,
    Group,
    PasswordInput,
    Stack,
    TextInput,
    Title,
} from "@mantine/core";
import { getDictionary } from "@/lib/getDictionary";


export default async function LoginPage({
    params,
}: {
    params: Promise<{ lang: string }>;
}) {
    const { lang } = await params;
    const dict = getDictionary(lang);
    return (
        <>
            <Box bg="blue" p="sm">
                نسخة تجريبية
            </Box>
        <Flex>
             <Box w="50%" p="xl">
                <Stack gap="md">
                    <Title order={3}>HYRDD</Title>
                    <Title order={1}>{dict.login.welcome}</Title>
                </Stack>
            </Box>

            <Box w="50%" p="xl">
                <Stack gap="md">
                    <Group justify="flex-end">
                        <Anchor href={lang === "ar" ? "/en/login" : "/ar/login"}>
                                {lang === "ar" ? "English" : "العربية"}
                        </Anchor>
                    </Group>

                        <Title order={2}>
                            {dict.login.sign}
                        </Title>

                        <TextInput
                            label={dict.login.email}
                            placeholder={dict.login.emailPlaceholder}
                            withAsterisk
                        />

                        <PasswordInput
                            label={dict.login.password}
                            placeholder={dict.login.passwordPlacholder}
                            withAsterisk
                        />

                        <Group justify="space-between">
                            <Checkbox
                                label={dict.login.remember}
                            />

                            <Anchor href="#">
                                {dict.login.forgotPassword}
                            </Anchor>
                        </Group>

                        <Button>
                            {dict.login.sign}
                        </Button>
                    </Stack>
                </Box>
            </Flex>
        </>
    );
}