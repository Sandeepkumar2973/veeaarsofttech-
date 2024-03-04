import React from "react";

const TeamMemberCard = ({ member }) => (
  <div className="single-team">
    <div className="team-image">
      <img src={member.image} alt={member.name} />
    </div>
    <div className="team-content">
      <div className="team-info">
        <h3>{member.name}</h3>
        <span>{member.role}</span>
      </div>
      <ul>
        {member.socialLinks.map((socialLink, i) => (
          <li key={i}>
            <a href={socialLink.url} target="_blank">
              <i data-feather={socialLink.icon} />
            </a>
          </li>
        ))}
      </ul>
      <p>{member.description}</p>
    </div>
  </div>
);

export default TeamMemberCard;
