import SearchInput from "@/components/search-input";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
    return (
        <div className="h-full p-4 space-y-2">
            <SearchInput />
        </div>
    );
}
