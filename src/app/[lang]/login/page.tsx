import {
    Anchor,
    Box,
    Button,
    Checkbox,
    Flex,
    Group,
    PasswordInput,
    Stack,
    Text as MantineText,
    TextInput,
    Title,
} from "@mantine/core";

import Image from "next/image";
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
            <Box bg="#228be6" p="sm">
                نسخة تجريبية
            </Box>
            <Group justify="space-between" p="xl">
                <Image
                    src="/KABI logo.jpeg"
                    alt="KABI logo"
                    width={80}
                    height={50}
                />

                <Group>
                      <Anchor href="#">
                        {dict.login.signUp}
                    </Anchor>
                    
                    <Button
                        component="a"
                        variant="default"
                        href={lang === "ar" ? "/en/login" : "/ar/login"}
                        h={33}
                        px={11}
                        radius="md"
                    >
                        {lang === "ar" ? "English" : "العربية"}
                    </Button>

                  
                </Group>
            </Group>
            <Flex mih="100vh" justify="space-between">

                <Box w="50%" p="xl">
                    <Stack gap="md">

                        <Title order={1} size="48px" fw={700}>
                            {dict.login.welcome}
                        </Title>

                        <Flex align="center" gap="sm">
                            <Title order={1} size="48px" fw={700}>
                                {dict.login.backTitle}
                            </Title>

                            <Title
                                order={1}
                                size="48px"
                                fw={700}
                                c="#89231D"
                            >
                                {dict.login.brandName}
                            </Title>
                        </Flex>

                        <MantineText size="lg" c="dimmed">
                            {dict.login.description}
                        </MantineText>

                    </Stack>
                </Box>

                <Box w="50%" p="xl">

                    <Stack
                        gap="md"
                        maw={420}
                        mx="auto"
                        justify="center"
                        h="70vh"
                    >
                        <Title order={2} size="32px" fw={700}>
                            {dict.login.sign}
                        </Title>
                        <TextInput
                            size="md"
                            label={dict.login.email}
                            placeholder={dict.login.emailPlaceholder}
                            withAsterisk
                            styles={{
                                label: {
                                    width: "100%",
                                    textAlign: "start",
                                },
                            }}
                        />
                        <Stack gap="xs">

                            <Group justify="space-between">

                                <MantineText fw={500}>
                                    {dict.login.password}
                                    <span style={{ color: "#ff4d4f" }}>
                                        *
                                    </span>
                                </MantineText>
                                <Anchor href="#" c="#89231D">
                                    {dict.login.forgotPassword}
                                </Anchor>

                            </Group>
                            <PasswordInput
                                size="md"
                                placeholder={dict.login.passwordPlaceholder}
                            />

                        </Stack>
                        <Group justify="space-between">

                            <Checkbox
                                label={dict.login.remember}
                                color="#89231D"
                            />
                            <Anchor href="#" c="#89231D">
                                {dict.login.reFactor}
                            </Anchor>

                        </Group>
                        <Button
                            size="md"
                            fullWidth
                            bg="#89231D"
                        >
                            {dict.login.sign}
                        </Button>
                    </Stack>
                </Box>
            </Flex>
        </>
    );
}