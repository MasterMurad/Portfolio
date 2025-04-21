import React from 'react';
import { Code, Database, Server, Globe, FileCode, GitBranch, Cpu } from 'lucide-react';

interface SkillIconProps {
  type: string;
  size?: number;
  className?: string;
}

const SkillIcon: React.FC<SkillIconProps> = ({ type, size = 20, className = '' }) => {
  const getIcon = () => {
    switch (type.toLowerCase()) {
      case 'csharp':
      case 'dotnet':
        return <Code size={size} />;
      case 'database':
        return <Database size={size} />;
      case 'api':
        return <Server size={size} />;
      case 'html':
      case 'css':
      case 'javascript':
      case 'typescript':
      case 'react':
        return <FileCode size={size} />;
      case 'git':
        return <GitBranch size={size} />;
      case 'code':
        return <Code size={size} />;
      case 'cloud':
        return <Cpu size={size} />;
      default:
        return <Globe size={size} />;
    }
  };

  return (
    <span className={className}>
      {getIcon()}
    </span>
  );
};

export default SkillIcon;