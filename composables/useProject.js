export const useProject = projects => {
  const serialized = projects.map(project => {
    const _media = [];
    const _photographs = [];
    if (project.sw_projects_id.screenshots) {
      project.sw_projects_id.screenshots.cards.forEach(card => {
        _media.push({
          ...card.sw_cards_id.media,
        });
      });
    }

    if (project.sw_projects_id.photographs) {
      project.sw_projects_id.photographs.cards.forEach(card => {
        _photographs.push({
          ...card.sw_cards_id.media,
        });
      });
    }

    return {
      ...project.sw_projects_id,
      media: _media,
      photographs: _photographs,
    };
  });

  return {
    serialized,
  };
};
