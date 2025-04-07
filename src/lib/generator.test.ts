import { generatePlan } from './generator';

describe('generatePlan', () => {
  it('should generate a valid plan for a valid idea', () => {
    const idea = 'Build a tutoring platform';
    const responses = ['response1', 'response2'];
    const plan = generatePlan(idea, responses);

    expect(plan).toHaveProperty('idea', idea);
    expect(plan).toHaveProperty('techStack');
    expect(plan).toHaveProperty('structure');
    expect(plan).toHaveProperty('code');
    expect(plan).toHaveProperty('notes');
  });

  it('should throw an error for invalid input', () => {
    expect(() => generatePlan('', [])).toThrow('Invalid idea input');
  });
});
