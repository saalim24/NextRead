import { useState } from 'react';
import { Tab } from '@headlessui/react';
import ByFilterForm from "@/components/form/ByFilterForm";
import ByLastReads from "@/components/form/ByLastReads";

const GENERATE_URL = "/api/generate";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const StyledTab = ({ title }) => (
  <Tab
    className={({ selected }) =>
      classNames(
        'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
        'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-transparent ring-white ring-opacity-60',
        selected ? 'bg-blue-600 text-white shadow-lg' : 'text-blue-500 hover:bg-blue-100'
      )
    }
  >
    {title}
  </Tab>
);

const StyledPanel = ({ children }) => (
  <Tab.Panel
    className={'rounded-xl p-3 bg-gray-50 ring-white ring-opacity-60 focus:outline-none'}
  >
    {children}
  </Tab.Panel>
);

export default function Query({ setSuggestions }) {
  const [loading, setLoading] = useState(false);

  return (
    <div className="w-full bg-white p-5 rounded-md shadow-sm">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-gray-100 p-1 shadow">
          <StyledTab title={'By last reads'}/>
          <StyledTab title={"By filter"}/>
        </Tab.List>
        <Tab.Panels className="mt-2">
          <StyledPanel>
            {/* by last reads tab */}
            <ByLastReads
              loading={loading}
              setLoading={setLoading}
              setSuggestions={setSuggestions}
              url={GENERATE_URL}
            />
          </StyledPanel>
          <StyledPanel>
            {/* by filter tab */}
            <ByFilterForm
              loading={loading}
              setLoading={setLoading}
              setSuggestions={setSuggestions}
              url={GENERATE_URL}
            />
          </StyledPanel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
