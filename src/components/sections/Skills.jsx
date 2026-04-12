import Badge from '../ui/Badge'
import Card from '../ui/Card'
import portfolioData from '../../data/portfolio.json'

const Skills = () => {
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioData.skills?.map((skillGroup) => (
            <Card key={skillGroup.category}>
              <h3 className="text-2xl font-bold text-primary mb-6">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.skills.map((skill) => (
                  <Badge key={skill}>{skill}</Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
