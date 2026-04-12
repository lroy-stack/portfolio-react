import React from 'react';
import socialData from '../../data/social.json';

const SocialLinks = () => {
  return (
    <div className="flex space-x-4">
      {socialData.map((social) => (
        <a
          key={social.id}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
          title={social.name}
        >
          <i className={`fab fa-${social.icon} text-xl`} />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
