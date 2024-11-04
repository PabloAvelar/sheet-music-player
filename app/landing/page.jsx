import { Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownSection, DropdownItem, cn} from '@nextui-org/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';

export default function LandingPage() {
  return (
    <div className="h-screen w-screen bg-nord-6">
      <div className="flex flex-col items-center justify-center h-full p-12">
        <div className="bg-nord-15 p-12 rounded-lg">
          <h1 className="text-9xl text-nord-0">Eyelody</h1>
        </div>
        <Button startContent={<FontAwesomeIcon icon={faUpload} className="text-nord-0"/>} className="bg-nord-7 mt-12">Upload</Button>
      </div>
    </div>
  );
}