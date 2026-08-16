import { ActionIcon, Card, Divider, Group, Text } from "@mantine/core";
import { IconFolder, IconPencil, IconTrash } from "@tabler/icons-react";

export default function FolderCard({ name }: { name: string }) {
    return (
        <Card withBorder p="md" ta="left">
            <Group justify="space-between">
                <IconFolder size={40} color="#a30018" fill="#a30018" />

                <Group gap="xs">
                    <ActionIcon variant="default">
                        <IconPencil size={15} />
                    </ActionIcon>

                    <ActionIcon variant="default" c="red">
                        <IconTrash size={15} />
                    </ActionIcon>
                </Group>
            </Group>

            <Text fw={600} mt="xs">{name}</Text>

            <Divider my="sm" />

            <Text size="sm" fw={700}>Created by</Text>
            <Text size="xs" c="dimmed">
                Admin Admin Admin on 06 August, 2026 - 12:06 PM
            </Text>

            <Text size="sm" fw={700} mt="xs">Last modified by</Text>
            <Text size="xs" c="dimmed">
                Admin Admin Admin on 06 August, 2026 - 12:06 PM
            </Text>
        </Card>
    );
}