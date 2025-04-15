import React from 'react';
import { Typography, List, ListItem, ListItemText, Box, SxProps, Theme, styled } from '@mui/material';

interface FormattedDescriptionProps {
  text: string;
  color?: string;
  sx?: SxProps<Theme>;
}

const StyledListItem = styled(ListItem)(({ theme }) => ({
  display: 'list-item',
  paddingLeft: theme.spacing(0.5),
  '&::marker': {
    color: theme.palette.primary.main,
  }
}));

const FormattedDescription: React.FC<FormattedDescriptionProps> = ({ text, color = 'text.secondary', sx }) => {
  // Split the text by newline characters
  const paragraphs = text.split('\n').filter(p => p.trim() !== '');
  
  const renderContent = () => {
    const result = [];
    let i = 0;
    
    while (i < paragraphs.length) {
      const paragraph = paragraphs[i];
      
      // Check if this is a list item (starts with a dash)
      if (paragraph.trim().startsWith('-')) {
        // Find all consecutive list items
        const listItems = [];
        let j = i;
        
        while (j < paragraphs.length && paragraphs[j].trim().startsWith('-')) {
          listItems.push(paragraphs[j].trim().substring(1).trim());
          j++;
        }
        
        // Add the list to our result
        result.push(
          <List key={`list-${i}`} sx={{ pl: 2, my: 1, listStyleType: 'disc' }}>
            {listItems.map((item, itemIndex) => (
              <StyledListItem key={`item-${itemIndex}`} sx={{ py: 0.5 }}>
                <ListItemText 
                  primary={item} 
                  primaryTypographyProps={{ color }} 
                />
              </StyledListItem>
            ))}
          </List>
        );
        
        // Skip the paragraphs we've processed
        i = j;
      } else {
        // Regular paragraph
        result.push(
          <Typography key={`para-${i}`} variant="body1" color={color} paragraph>
            {paragraph}
          </Typography>
        );
        i++;
      }
    }
    
    return result;
  };
  
  return (
    <Box sx={sx}>
      {renderContent()}
    </Box>
  );
};

// Add this extension method to Array
declare global {
  interface Array<T> {
    takeWhile(predicate: (value: T) => boolean): T[];
  }
}

if (!Array.prototype.takeWhile) {
  Array.prototype.takeWhile = function<T>(this: T[], predicate: (value: T) => boolean): T[] {
    const result: T[] = [];
    for (const item of this) {
      if (predicate(item)) {
        result.push(item);
      } else {
        break;
      }
    }
    return result;
  };
}

export default FormattedDescription; 