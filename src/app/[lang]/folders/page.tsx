import {
    ActionIcon,
    Box,
    Button,
    Card,
    Divider,
    Flex,
    Group,
    Select,
    SimpleGrid,
    Stack,
    Text,
    TextInput,
} from "@mantine/core";

import {
    IconBell,
    IconBriefcase,
    IconBuilding,
    IconChevronDown,
    IconFolder,
    IconGauge,
    IconHelpCircle,
    IconListDetails,
    IconPencil,
    IconPlus,
    IconRefresh,
    IconSearch,
    IconSettings,
    IconTrash,
    IconUser,
} from "@tabler/icons-react";

import Image from "next/image";
import FolderCard from "./FolderCard";

export default function FoldersPage() {
    return (
        <Box mih="100vh" bg="#f5f6fa">

            <Box bg="#3498db" c="white" py="sm" ta="center">
                This is a KABi test environment site and is a pilot site that does not represent the entity
            </Box>

            <Flex h={58} bg="white" px="md" justify="space-between" align="center">
                <Image src="/KABI logo.jpeg" alt="KABI logo" width={60} height={32} />

                <Group gap="md">
                    <Button variant="default" size="xs" h={28} px={12}>العربية</Button>

                    <IconBell size={18} />
                    <IconHelpCircle size={18} />

                    <Box>
                        <Text size="sm" fw={700}>Admin Admin Adm...</Text>
                        <Text size="xs" c="dimmed">Super Admin, Inter...</Text>
                    </Box>

                    <ActionIcon radius="xl" bg="#a30018" c="white">
                        <IconUser size={17} />
                    </ActionIcon>

                    <IconChevronDown size={14} />
                </Group>
            </Flex>

            <Flex>

                <Stack w={60} bg="white" align="center" py="md" gap="lg">
                    <ActionIcon variant="subtle" color="gray"><IconGauge size={20} /></ActionIcon>
                    <ActionIcon variant="subtle" color="gray"><IconBriefcase size={20} /></ActionIcon>
                    <ActionIcon variant="light" color="red"><IconFolder size={20} /></ActionIcon>
                    <ActionIcon variant="subtle" color="gray"><IconBuilding size={20} /></ActionIcon>
                    <ActionIcon variant="subtle" color="gray"><IconUser size={20} /></ActionIcon>
                    <ActionIcon variant="subtle" color="gray"><IconListDetails size={20} /></ActionIcon>
                    <ActionIcon variant="subtle" color="gray"><IconSettings size={20} /></ActionIcon>
                </Stack>

                <Box flex={1} p="md">

                    <Flex justify="space-between" align="center" mb="md">
                        <Group gap="xs">
                            <TextInput w={300} placeholder="Search" leftSection={<IconSearch size={17} />} />

                            <ActionIcon size={36} bg="#a30018" c="white">
                                <IconSearch size={18} />
                            </ActionIcon>

                            <ActionIcon size={36} variant="light" color="red">
                                <IconRefresh size={18} />
                            </ActionIcon>
                        </Group>

                        <Group gap="xs">
                            <Select w={125} data={["Active", "Inactive"]} defaultValue="Active" />

                            <Button bg="#a30018" leftSection={<IconPlus size={17} />}>
                                Create New
                            </Button>
                        </Group>
                    </Flex>
                 
                </Box>

            </Flex>

        </Box>
    );
}