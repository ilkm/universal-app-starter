import { Text } from "ui/text";
import { View } from "ui/view";
import { Link } from "ui/link";

export function Home() {
  return (
    <View className="flex flex-1 justify-center items-center">
      <Text className="text-base">
        Edit{" "}
        <Text className="text-base font-bold">
          {" "}
          packages/app/screens/home.tsx
        </Text>{" "}
        to edit this screen.
      </Text>

      <Link href="/auth/mobile-login">
        <Text>mobile no login</Text>
      </Link>

      <Link href="/auth/password-login">
        <Text>password login</Text>
      </Link>
    </View>
  );
}
