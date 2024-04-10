
import { GraphQLScalarType, Kind } from 'graphql';
import pgvector from 'pgvector/knex';

export const GraphQLVector = new GraphQLScalarType({
	name: 'GraphQLVector',
	description: 'Vector value, List of Number',
	serialize(value) {
		if (!value) return value;
		if (typeof value !== 'string') {
			throw new Error('Value must be a String');
		}

		return pgvector.fromSql(value);
	},
	parseValue(value) {
		return pgvector.toSql(value);
	},
	parseLiteral(ast) {
		if (ast.kind !== Kind.LIST && ast.values.some(d => d.kind !== Kind.INT || d.kind !== Kind.Float)) {
			throw new Error('Value must be a List of Number');
		}

		return ast.values.map(d => +d.value)
	},
});
