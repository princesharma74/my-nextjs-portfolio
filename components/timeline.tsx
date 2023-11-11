import React, { ElementType } from 'react';

interface ListItemProps {
  title: string;
  startDate: Date;
  endDate: Date;
  description: string;
  link ?: string | null;
  Icon ?: ElementType;
}

const ListItem: React.FC<ListItemProps> = ({ title, startDate, endDate, description, link, Icon}) => {
  return (
    <li className="mb-10 ml-6">
      <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
        {Icon && <Icon className="w-3.5 h-3.5 text-blue-500" aria-hidden="true" />}
      </span>
      <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">{title} 
        {
          // if startDate is within the last 3 months, show the "Latest" badge
          startDate > new Date(Date.now() - 90 * 24 * 60 * 60 * 1000) ? 
          <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-3">Latest</span>
          : null
        }
      </h3>
      <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{startDate.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })} - {endDate.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}</time>
      <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">{description}</p>
      {
        // if link is provided, show the "Download ZIP" button
        link ?
          <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">
            <svg className="w-3.5 h-3.5 mr-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z" />
              <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
            </svg> Download ZIP
          </a>
        : null

      }
    </li>
  );
};

interface ListProps {
  items: ListItemProps[];
  Icon: ElementType;
}

const List: React.FC<ListProps> = ({ items, Icon }) => {
    return (
      <ol className="relative border-l border-gray-200 dark:border-gray-700">
        {items.map((item, index) => (
          <ListItem
            key={`${item.title}-${index}`}
            {...item}
            Icon={Icon}
          />
        ))}
        </ol>
    );
}

interface TimelineProps {
  title: string;
  Icon: ElementType;
  items: ListItemProps[];
}

const Timeline: React.FC<TimelineProps> = ({ title, Icon, items }) => {
  return (
    <div className="relative">
      <h2 className="mb-6 text-3xl font-semibold text-gray-900 dark:text-white">{title}</h2>
      <List 
        items={items}
        Icon = {Icon}
      />
    </div>
  );
};

export default Timeline;